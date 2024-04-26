import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-around my-2">
            <h1 className="text-2xl font-bold text-emerald-400">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;