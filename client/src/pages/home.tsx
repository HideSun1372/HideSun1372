export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen" data-testid="container-home">
      <h1 
        className="text-[20px] font-normal tracking-[-0.01em] leading-none" 
        data-testid="text-greeting"
        style={{ WebkitFontSmoothing: 'antialiased' }}
      >
        hi
      </h1>
    </div>
  );
}
