
const WorkCard = ({ work }) => {
    return (
        <div className="w-full bg-color-white p-8 rounded-md">
            <div className="flex-center justify-between">
                <img src={work.icon} alt="icon image" />
                <h1 className="text-[#EBEEF7] text-[60px]">0{work.id}</h1>
            </div>
            <h2 className="font-semibold text-2xl mb-5">{work.name}</h2>
            <p className="text-[#767E94]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, exercitationem doloremque iure corporis laboriosam officiis cumque dolore aspernatur eius ipsam.</p>
        </div>
    );
};

export default WorkCard;