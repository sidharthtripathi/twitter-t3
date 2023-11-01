import { NextAuthOptions } from "next-auth";
import { compare } from 'bcrypt'
import { prisma } from './db'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import { removeAt } from "./removeAt";
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
		async jwt({ token, user }) {
			if (user) {
				console.log(user)
				const pUser = await prisma.user.findUnique({
					where : {email : user.email as string}
				})
				if(!pUser){
					const newUser = await prisma.user.create({
						data : {
							email : user.email as string,
							name : user.name as string,
							username : removeAt(user.email as string),
							image : user.image as string,
						}
					})
					return {
						...token,
						id: newUser.id,
						username: newUser.username
					}
				}
				else{
					return {
						...token,
						id : pUser.id,
						username : pUser.username
					}
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