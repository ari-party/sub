export default function formatString(
  string: string,
  variables: Record<string, string>,
  delimiters?: {
    prefix?: string;
    suffix?: string;
  }
): string;
