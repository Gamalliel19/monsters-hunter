import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
} from "@clerk/nextjs";
import Link from "next/link";
export default function HeadNav() {
	const { isSignedIn } = useUser();
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					{isSignedIn ? (
						<>
							<li>
								<Link href="/monster">Monster</Link>
							</li>
							<li>
								<Link href="/locate">Locate</Link>
							</li>{" "}
						</>
					) : null}
				</ul>
				<ul>
					<li>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</li>
				</ul>
			</nav>
		</header>
	);
}
