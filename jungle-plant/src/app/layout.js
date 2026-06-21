import { WishlistProvider } from "@/context/WishlistContext";
import "@/styles/globals.css";


export const metadata = {
    title: "Jungle House",
    descriptiton: "An ecommerce app to for all plants"
};

export default function RootLayout({ children}) {
    return (
        <html lang="en">
            <body>
                <WishlistProvider>
                <main>{children}</main>
                </WishlistProvider>
            </body>

        </html>
    )
}