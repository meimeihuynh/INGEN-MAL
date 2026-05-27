import Infobox from "../infobox";

const InfoboxComponent = () => {
    return (
        <div className="info-wrapper">
            {Infobox.map((item) => (
                <div key={item.id} className="infobox-card">
                    <img src={item.icon} className="infobox-icon"/>
                    <h3 className="infobox-title">{item.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default InfoboxComponent;