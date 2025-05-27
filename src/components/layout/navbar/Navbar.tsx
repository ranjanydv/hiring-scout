import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="">
            <div className="flex justify-between items-center mx-auto container">
                <div className="relative w-32 h-16">
                    <Image fill src={'/logo.png'} alt="Logo" className="object-contain" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="hover:bg-accent p-2.5 border rounded-full text-muted-foreground transition-all duration-200 ease-in cursor-pointer">
                        <Bell size={18} />
                    </span>
                    <div className="flex items-center gap-3 hover:bg-muted/50 px-2 py-1.5 rounded-lg transition-colors cursor-pointer">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col space-y-1">
                                <p className="font-medium text-sm leading-none">Sara Ann</p>
                                <span className="text-muted-foreground text-xs">Hiring Manager for Apple Inc.</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-blue-500" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
