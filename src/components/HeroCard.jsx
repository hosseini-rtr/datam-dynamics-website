import { facebook, instagram, linkedin, twitter } from "../assets";

const HeroCard = ({
  name,
  title,
  img,
  bio,
  expertise,
  linkedinUrl,
  instagramUrl,
  twitterUrl,
  facebookUrl,
}) => (
  <div className="flex flex-col px-8 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card hover:shadow-2xl transition-all duration-300 group">
    {/* Profile Image and Basic Info */}
    <div className="flex flex-col items-center mb-6">
      <div className="relative mb-4">
        <img
          src={img}
          alt={name}
          className="w-[120px] h-[120px] rounded-full object-cover border-4 border-dimBlue group-hover:border-secondary transition-all duration-300"
        />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-gradient rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>
      </div>

      <h4 className="font-poppins font-semibold text-[24px] leading-[32px] text-white text-center mb-2">
        {name}
      </h4>
      <p className="font-poppins font-medium text-[18px] leading-[24px] text-secondary text-center mb-3">
        {title}
      </p>
    </div>

    {/* Bio */}
    {bio && (
      <div className="mb-6">
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center">
          {bio}
        </p>
      </div>
    )}

    {/* Expertise */}
    {expertise && (
      <div className="mb-6">
        <h5 className="font-poppins font-semibold text-[16px] leading-[20px] text-white mb-3">
          Expertise
        </h5>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dimBlue rounded-full text-[12px] text-white font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

    {/* Social Links */}
    <div className="flex justify-center space-x-4 mt-auto pt-4 border-t border-dimBlue">
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-dimBlue rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 group"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-5 h-5 object-contain filter brightness-110 group-hover:brightness-150"
          />
        </a>
      )}

      {instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-dimBlue rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 group"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-5 h-5 object-contain filter brightness-110 group-hover:brightness-150"
          />
        </a>
      )}

      {twitterUrl && (
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-dimBlue rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 group"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="w-5 h-5 object-contain filter brightness-110 group-hover:brightness-150"
          />
        </a>
      )}

      {facebookUrl && (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-dimBlue rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 group"
        >
          <img
            src={facebook}
            alt="Facebook"
            className="w-5 h-5 object-contain filter brightness-110 group-hover:brightness-150"
          />
        </a>
      )}
    </div>
  </div>
);

export default HeroCard;
