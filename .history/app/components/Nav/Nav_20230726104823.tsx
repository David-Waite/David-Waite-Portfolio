

export default function Nav(){}

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={"./about"}>About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
