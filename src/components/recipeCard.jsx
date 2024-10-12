import { BiDish } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";

const RecipeCard = () => {
  return (
    <div className="card bg-base-100 w-[403px] shadow-xl rounded-[33px] overflow-hidden">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-[38px] py-[28px]">
        <h2 className="card-title font-bold text-[32px] mb-[18px]">Shoes!</h2>

        <table className="mb-[40px]">
          <tr>
            <td>
              <MdAccessTime size={18.5}/>
            </td>
            <td className="text-[20px]">30 mins</td>
            <td>
                <PiCookingPot size={18.5}/>
            </td>
            <td className="text-[20px]">40 mins</td>
          </tr>
          <tr>
            <td><GoGraph size={18.5}/></td>
            <td className="text-[20px]">Easy</td>
            <td><BiDish size={20}/></td>
            <td className="text-[20px]">Italian</td>
          </tr>
        </table>

        <div className="card-actions">
          <button className="btn bg-[#FFDB63] text-[var(--neutral-800)] hover:bg-[#e9c244]">View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
