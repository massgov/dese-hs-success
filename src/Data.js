import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          data: null,
        };
      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          componentDidUpdate = (prevProps) =>  {
              let oldId = prevProps.match.params
              let newId = this.props.match.params
              if (newId !== oldId)
              this.fetchData()
          };

          fetchData = () =>  {
              var _this = this;
              axios.all([
                      axios.get('/data/' + this.props.match.params.year +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
                      _this.setState({
                          data: result.data,
                      });
                  }))
                  .catch((error) => {console.log(error)})

          };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
              const {data} = this.state;
              return (
              <BlockChart data={data}/>
              );
          };

}

export default Data
