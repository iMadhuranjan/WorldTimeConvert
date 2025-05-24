import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-3 shadow-all-sides">
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse justify-between items-center">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <Link href="/about" className="hover:text-amber-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-amber-500">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-amber-500">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:text-amber-500">
            Terms of Use
          </Link>
        </div>

        {/* Website Credit */}
        <div className="mt-4 md:mt-0 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">WorldTimeConvert.com</span> - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
