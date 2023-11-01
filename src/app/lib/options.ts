import { NextAuthOptions } from "next-auth";
import { compare } from 'bcrypt'
import { prisma } from './db'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: {
					label: "email",
					placeholder: "email",
					type: "email",
				},
				password: {
					label: "password",
					placeholder: "password",
					type: "password"
				}
			},
			async authorize(credentials) {
				try{
				const user = await prisma.user.findFirst({
					where: {
						email: credentials?.email
					}
				})
				if (user) {
					if (!user?.password) return null // signup using google
					const validPass = await compare(credentials?.password as string, user.password)
					if (!validPass) return null;
					return {
						id: user.id,
						username: user.username,
						email: user.email,
						name: user.name,
						image: user.image
					}
				}
				else {
					return null
				}
			}
			catch(err){
				
				return null
			}

			}
		}),
		GoogleProvider({
			clientId : process.env.GOOGLE_CLIENT_ID!,
			clientSecret : process.env.GOOGLE_CLIENT_SECRET!
		})
	],
	callbacks: {
		jwt({ token, user }) {
			const u: any = user as unknown
			if (user) {
				return {
					...token,
					id: u.id,
					username: u.username
				}
			}
			return token
		},
		session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					username: token.username,
				}
			}
		}
	},
	pages : {
		signIn  : "/login"
	}
}