import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Static 404 page used during static export (output: "export").
 * Mirrors the themed NotFound component.
 */
export default function NotFoundExport() {
  return (
    <main className="container-op py-16">
      <section className="card-op p-8 text-center" role="alert" aria-live="assertive">
        <h1 className="text-3xl font-semibold mb-2">404 – Page Not Found</h1>
        <p className="text-muted mb-6">The page you’re looking for doesn’t exist.</p>
        <Link className="btn-op btn-primary" href="/">Back to Home</Link>
      </section>
    </main>
  );
}
