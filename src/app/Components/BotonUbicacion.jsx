import Link from 'next/link';

export default function BotonUbicacion({ href, children, className = '' }) {
    return (
        <Link 
            href={href} 
            className={className}
            style={{
    
            }}
        >
            {children}
        </Link>
    );
}