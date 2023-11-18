import { Skeleton } from "@/app/components/ui/skeleton";
type Props = {
  input?: string;
};
function SearchResults({ input = "" }: Props) {
  return (
    <div className="hidden space-y-2">
      <Skeleton className="w-40 h-4 rounded-full" />
      <Skeleton className="w-40 h-4 rounded-full" />
      <Skeleton className="w-40 h-4 rounded-full" />
    </div>
  );
}

export default SearchResults;
