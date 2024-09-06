import HeadNav from "@/components/HeadNav";
import "@/styles/globals.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function App({ Component, pageProps }) {
	return (
		<ClerkProvider>
			<ConvexProvider client={convex}>
				<HeadNav />
				<Component {...pageProps} />
			</ConvexProvider>
		</ClerkProvider>
	);
}
