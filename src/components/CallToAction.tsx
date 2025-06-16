import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden">
      <div className="container max-w-xl relative mx-auto px-4">
        {/* emojiStar */}
        <div className="absolute -top-24 left-[-200px] pointer-events-none hidden sm:block">
          <Image
            src={emojiStarImage}
            alt="emoji star"
            className="w-[clamp(200px,10vw,96px)]"
          />
        </div>

        {/* helix */}
        <div className="absolute top-6 right-[-200px] pointer-events-none hidden sm:block">
          <Image
            src={helixImage}
            alt="helix"
            className="w-[clamp(200px,12vw,128px)]"
          />
        </div>

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl mt-12">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5 ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
export default CallToAction;
