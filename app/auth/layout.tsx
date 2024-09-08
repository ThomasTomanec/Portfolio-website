const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="bg-gradient-to-b from-gray-400 to-gray-800 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;