const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="bg-gradient-to-b from-sky-400 to-blue-800 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;