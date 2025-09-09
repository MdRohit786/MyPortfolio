import { ArrowUp } from "lucide-react";


const Footer = () => {
  return (
    <footer className="py-3 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground ">

      &copy;{new Date().getFullYear()} ItsRait.co, All right reserved.
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary transition-colors">
        <ArrowUp size={20}/>
      </a>
    </footer>
    //   {new Date().getFullYear()}
  );
};

export default Footer;
