import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="px-[77px] py-8">
            <nav className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <img src="./Ico.png" alt="" />
                    <span className="font-medium text-[26px] text-[var(--neutral-800)]">
                        Delights at the Table
                    </span>
                </div>
                {/* links */}
                <div className="flex gap-[46px]">
                    <Link to={'/'} className="font-bold text-[26px] text-[var(--neautral-800)]">Home</Link>
                    <Link to={'/'} className="font-bold text-[26px] text-[var(--neautral-800)]">About Us</Link>
                </div>
                <form className="flex items-center gap-1 bg-[var(--white-200)] px-5 py-[10px] rounded-[22px]">
                    <BiSearch />
                    <input type="search" name="recipes" id="" className="bg-transparent outline-none font-light text-[15px] text-[var(--neutral-400)]" placeholder="search recipes" />
                </form>
            </nav>
        </div>
    );
}

export default Navbar;