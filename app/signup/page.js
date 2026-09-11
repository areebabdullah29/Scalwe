import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Sign up",
  description: `Create your ${siteConfig.name} account.`,
};

export default function SignupPage() {
  return (
    <>
      <Header />
      <main>
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
