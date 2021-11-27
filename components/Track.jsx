import { ImHeadphones } from 'react-icons/im';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { playState, playingTrackState } from '../atoms/playerAtom';

export default function Track({ track, chooseTrack }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);
    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <img
          className=" rounded-xl h-12 w-12 object-cover mr-3"
          src={track.albumUrl}
          alt=""
        />
        <div>
          <h4 className="text-white text-sm font-bold truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] text-[13px] font-bold group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>
      <div className="flex items-center md:ml-auto space-x-2.5">
        <div className=" text-white flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />
          <h4 className="">{track.popularity}</h4>
        </div>
        <div className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
          <AiFillHeart
            className={`text-xl ml-3 icon ${
              hasLiked ? 'text-[#1ed760]' : 'text-[#868686]'
            }`}
            onClick={() => setHasLiked(!hasLiked)}
          />
          {track.uri === playingTrack.uri && play ? (
            <div
              onClick={handlePlay}
              className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
            >
              <BsFillPauseFill className="text-white textxl" />
            </div>
          ) : (
            <div
              onClick={handlePlay}
              className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
            >
              <BsFillPlayFill className="text-white textxl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
