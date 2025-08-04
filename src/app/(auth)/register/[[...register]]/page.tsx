import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
    return (
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
             <Image
                src='/assets/logo.png'
                width={300}
                height={300}
                alt="Logo"
            />
            <div className="mt-3">
                <SignUp />
            </div>
        </main>
)
}