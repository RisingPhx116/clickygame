(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/images/bestman.jpg","clicked":false},{"id":2,"image":"./assets/images/dotherightthing.jpg","clicked":false},{"id":3,"image":"./assets/images/eves-bayou-film.jpg","clicked":false},{"id":4,"image":"./assets/images/friday.jpg","clicked":false},{"id":5,"image":"./assets/images/greatdebaters.jpg","clicked":false},{"id":6,"image":"./assets/images/juice.jpg","clicked":false},{"id":7,"image":"./assets/images/loveandbball.jpg","clicked":false},{"id":8,"image":"./assets/images/lovejones.jpg","clicked":false},{"id":9,"image":"./assets/images/setitoff.jpg","clicked":false},{"id":10,"image":"./assets/images/soulfood.jpg","clicked":false},{"id":11,"image":"./assets/images/Tuskegee-airmen.jpg","clicked":false},{"id":12,"image":"./assets/images/waiting-to-exhale.jpg","clicked":false}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(2),n=a.n(i),r=(a(14),a(3)),l=a(4),o=a(7),m=a(5),d=a(8),g=(a(15),function(e){return c.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(a(16),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(17),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),k=a(6),h=(a(18),0),p=0,S="Try to click all the posters just ONCE! Click on the same one twice and you lose!",j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={matches:k,correctGuesses:h,bestScore:p,clickMessage:S},a.setClicked=function(e){var t=a.state.matches,s=t.filter((function(t){return t.id===e}));if(s[0].clicked){console.log("Correct Guesses: "+h),console.log("Best Score: "+p),h=0,S="OOOPS! You clicked on this one already.";for(var c=0;c<t.length;c++)t[c].clicked=!1;a.setState({clickMessage:S}),a.setState({correctGuesses:h}),a.setState({matches:t})}else if(h<11)s[0].clicked=!0,h++,S="Great! You haven't click on that one yet! Keep going!",h>p&&(p=h,a.setState({bestScore:p})),t.sort((function(e,t){return.5-Math.random()})),a.setState({matches:t}),a.setState({correctGuesses:h}),a.setState({clickMessage:S});else{s[0].clicked=!0,h=0,S="WOW!!! You got them ALL!!! Can you do it again!",p=12,a.setState({bestScore:p});for(var i=0;i<t.length;i++)t[i].clicked=!1;t.sort((function(e,t){return.5-Math.random()})),a.setState({matches:t}),a.setState({correctGuesses:h}),a.setState({clickMessage:S})}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(f,null,"Da Clicky Movie Game"),c.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage),c.a.createElement("h3",{className:"scoreSummary card-header"},"Correct Guesses: ",this.state.correctGuesses,c.a.createElement("br",null),"Best Score: ",this.state.bestScore),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.matches.map((function(t){return c.a.createElement(g,{setClicked:e.setClicked,id:t.id,key:t.id,image:t.image})})))))}}]),t}(s.Component);n.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.76a58a14.chunk.js.map