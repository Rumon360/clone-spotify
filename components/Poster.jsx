import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atoms/playerAtom';

export default function Poster({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
      onClick={handlePlay}
      className=" w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
    >
      <img
        src={track.albumUrl}
        alt=""
        className=" h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />
      <div className=" absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className=" h-10 w-10 bg-[#15883a] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className=" text-2xl " />
          ) : (
            <BsFillPlayFill className=" text-2xl ml-[1px]" />
          )}
        </div>
        <div className=" text-[15px] font-mono">
          <h4 className=" font-extrabold truncate w-44">{track.title}</h4>
          <h6>{track.artist}</h6>
        </div>
      </div>
    </div>
  );
}
