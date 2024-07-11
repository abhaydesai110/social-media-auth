

// import TwitterSignIn from "./Components/TwitterSignIn";
import FacebookSignIn from "./Components/FacebookSignIn";
import InstagramLogin from "./Components/InstagramLogin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Twitter /> */}
      {/* <TwitterSignIn /> */}
      <FacebookSignIn />
      <InstagramLogin />
    </main>
  );
}
