export const metadata = {
    title: "Dashboard",
    description: "Olivia Evans",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className=" bg-purple">{children}</body>
        </html>
    );
}
