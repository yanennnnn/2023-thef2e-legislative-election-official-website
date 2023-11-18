import styled from 'styled-components';
import Row from '@/components/Row';
import paw from '@/assets/paw.svg';
import policyBg1 from '@/assets/policyBg1.svg'
import policyBg2 from '@/assets/policyBg2.svg'
import policyBg3 from '@/assets/policyBg3.svg'
import policyBg4 from '@/assets/policyBg4.svg'
import policyText from '@/assets/policyText.png'
interface IPolicyItem {
  id: string;
  title: string;
  list: string[];
  img: string;
  imgBg: string;
}
const StyledSectionPage = styled.section`
background: #D9E8FF;
// height: 100%;
.row {
  margin-left: -15px;
  margin-right: -15px;
  .col {
    padding-left: 15px;
    padding-right: 15px;
  }
}
.policyImg {
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  height: calc(100vh - 109px);
  overflow: hidden;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    background-size:contain;
    background-repeat: no-repeat;
    background-image: url('${policyText}');
    width: 192px;
    height: 221px;
    bottom: 39px;
    left: 40px
  }
}
.policyContent {
  display: flex;
  align-items:center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background-size:cover;
    background-repeat: no-repeat;
  }
  &.serve {
    &:after {
      background-image: url('${policyBg1}');
      width: min(60vh, 650px);
      padding-bottom: min(69vh, 667px);
      right: 0;
      top: 64%;
      transform: translateY(-50%);
    }
  }
  &.leisure {
    &:after {
      background-image: url('${policyBg2}');
      width: min(50vh, 700px);
      padding-bottom: min(74vh, 703px);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.educate {
    &:after {
      background-image: url('${policyBg3}');
      width: min(90vh, 750px);
      padding-bottom: min(61vh, 538px);
      left: -16%;
      bottom: 0vh;
    }
  }
  &.impression {
    &:after {
      background-image: url('${policyBg4}');
      width: min(70vh, 500px);
      padding-bottom: min(69vh, 492px);
      left: 0px;
      top: 3vh;
    }
    
  }
}
.policyContentBox {
  width: 581px;
  max-width: 100%;
}
.topic {
  color: #3670C7;
  font-weight: 700;
  font-size: 22px;
}
.title {
  font-size: 32px;
  margin: 16px 0 60px 0;
  line-height: 46px;
}
.policyList {
  .policyItem {
    position: relative;
    margin-left: 28px;
    margin-bottom: 16px;
    &:before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: #3670C7;
      left: -28px;
      top: 8px;
    }
  }
}
`;
function SectionPage({ item, index } : {item:IPolicyItem, index:string|number }) {
  return (
    <>
      <StyledSectionPage>
        <Row className='row'>
          <div className='col policyImg' style={{backgroundImage: `url('${item.img}')`}}>

          </div>
          <div className={`col policyContent ${item.id}`}>
            <div className='policyContentBox'>
              <p className='topic'><img src={paw} alt="" width="22" style={{marginRight: '6px'}}/>政策{ Number(index) + 1 }</p>
              <h2 dangerouslySetInnerHTML={{__html: item.title}} className='title'></h2>
              <ul className='policyList'>
                {item.list.map((policy, index2)=> (
                  <li key={index2} className='policyItem'>{policy}</li>
                ))}
              </ul>
            </div>
           
          </div>
        </Row>
      </StyledSectionPage>
    </>
  )
}

export default SectionPage