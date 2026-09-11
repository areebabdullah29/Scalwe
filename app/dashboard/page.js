import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import { getSessionUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const userId = await getSessionUserId();
  if (!userId) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true, email: true },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main>
        <section className="section auth-section">
          <div className="container auth-layout">
            <div className="contact-form auth-card">
              <span className="eyebrow">Dashboard</span>
              <h1>Welcome back, {user.name}.</h1>
              <p className="auth-subtitle">You&apos;re signed in as {user.email}.</p>
              <LogoutButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
