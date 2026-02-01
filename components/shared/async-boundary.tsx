import { ReactNode, Suspense } from "react";

import { ErrorBoundary } from "./error-boundary";

interface AsyncBoundaryProps {
  children: ReactNode;
  loadingFallback: ReactNode;
  errorFallback: ReactNode;
}

export function AsyncBoundary({
  children,
  loadingFallback,
  errorFallback,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
