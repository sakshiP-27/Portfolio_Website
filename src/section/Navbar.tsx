import { FloatingNav } from "@/components/ui/floating-navbar";

export function Navbar() {
    return (
        <FloatingNav navItems={
            [
                { name: "Home", link: "#home" },
                { name: "About", link: "#about" },
                { name: "Education", link: "#education"},
                { name: "Skills", link: "#skills" },
                { name: "Projects", link: "#projects" },
                { name: "Contact", link: "#contact" }
            ]
        }/>
    );
}