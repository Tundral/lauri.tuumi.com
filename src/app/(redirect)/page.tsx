const RedirectPage = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.location.replace('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/en')`,
    }}
  />
);

export default RedirectPage;
