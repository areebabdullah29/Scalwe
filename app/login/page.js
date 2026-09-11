import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Log in",
  description: `Log in to your ${siteConfig.name} account.`,
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
