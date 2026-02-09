export const metadata = {
  title: 'Kingdom Alive',
  description: 'Explore the world of Kingdom Alive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}