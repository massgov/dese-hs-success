import React from 'react';
import DataViz9 from './DataViz9'
import DataViz10 from './DataViz10'
import DataViz11 from './DataViz11'
import DataViz12 from './DataViz12'
import Navigation from './Navigation'
import Intro from './Intro'
import Conclusion from './Conclusion'
import DistIntro from './DistIntro'
import { StickyContainer, Sticky } from 'react-sticky';


class GradeDash extends React.Component {
  render() {
    return (
          <StickyContainer key={1}>
                  <Sticky>
                    {
                      (props) => {
                        var sticky
                        if (props.isSticky){
                          sticky = true
                        } else { sticky = false }
                        return (
                          <Navigation sticky={sticky}/>
                        )
                      }
                    }
                  </Sticky>
                  <Intro />
                  <DataViz9 />
                  <DataViz10 />
                  <DataViz11 />
                  <DataViz12 />
                  <Conclusion />
                  <DistIntro />
          </StickyContainer>
    )
  }

}

export default GradeDash;
