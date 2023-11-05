import { FunctionComponent, MouseEventHandler } from 'react';
import * as S from './styles';
import spaceman from './assets/spaceman.png';
import bg from './assets/404-Space.png';
import Button from './components/Button';

interface Page404Props {
  title?: string,
  subtitle?: string,
  btn1Label: string,
  btn1Action: MouseEventHandler<HTMLButtonElement>,
  btn2Label: string,
  btn2Action: MouseEventHandler<HTMLButtonElement>

}

const Page404: FunctionComponent<Page404Props> = ({ title, subtitle, btn1Label, btn1Action, btn2Label, btn2Action }) => {

  return (
    <S.Page>
      <S.BG src={bg} alt='background with stars and red planets'/>
      <S.Wrapper>
        <S.IMG src={spaceman} alt='spaceman floating in stars'/>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <S.ButtonGroup>
          <Button label={btn1Label} onClick={btn1Action} />
          <Button label={btn2Label} onClick={btn2Action} />
        </S.ButtonGroup>
      </S.Wrapper>
    </S.Page>
  )
}

export default Page404
