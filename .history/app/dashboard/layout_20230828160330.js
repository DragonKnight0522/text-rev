export const metadata = {
    title: "Dashboard",
    description: "Oliva evan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
