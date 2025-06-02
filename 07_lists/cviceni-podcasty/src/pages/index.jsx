import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import {Episode} from "../components/Episode"

const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

document.querySelector("#root").innerHTML = render(
  <>
    <div className="episodes-list">
      {episodes.map(episode=>
      <Episode
      key={episode.num}
      num={episode.num}
      title={episode.title}
      guest={episode.guest} />
      )
    }
    </div>
  </>
);
