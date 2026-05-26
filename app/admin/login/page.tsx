"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!data.ok) {
      setError(data.message || "Login failed.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#030712] px-4 text-white">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-panel backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon">SEXIMON Admin</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Login</h1>
        <p className="mt-3 text-sm leading-6 text-white/50">Login with the default admin account. Change credentials later in production.</p>
        <form onSubmit={login} className="mt-8 grid gap-4">
          <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-neon/60" />
          {error && <p className="rounded-2xl border border-red-400/25 bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
          <button disabled={loading} className="rounded-2xl bg-gradient-to-r from-neon to-neonDeep px-5 py-4 text-sm font-semibold text-white shadow-neon transition disabled:opacity-60">{loading ? "Logging in..." : "Login"}</button>
        </form>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/45">Default:<br />username: admin<br />password: admin</div>
      </div>
    </main>
  );
}
