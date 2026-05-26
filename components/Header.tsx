export function Header() {
  return <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/55 backdrop-blur-xl'><div className='mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 md:px-8'><a href='#' className='text-sm tracking-[0.5em]'>S E X I M O N</a><nav className='hidden gap-8 text-sm text-textMuted md:flex'><a href='#work'>Work</a><a href='#about'>About</a><a href='#process'>Process</a><a href='#contact'>Contact</a></nav><button className='grid h-10 w-10 place-items-center rounded-full border border-border'>☰</button></div></header>;
}
