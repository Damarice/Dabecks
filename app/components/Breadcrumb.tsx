import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="ds-breadcrumb">
      <div className="ds-container">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link
              href="/"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-navy)] transition-colors ds-caption font-medium"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-3 h-3 text-[var(--color-neutral-400)] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-navy)] transition-colors ds-caption font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="ds-caption font-semibold text-[var(--color-text)]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
