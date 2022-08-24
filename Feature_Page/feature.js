let filter_data=[
    {title:"Keyword Research",
    description:"Bring traffic to your site by finding the best keywords",
    tool:"6 tools",
    id:"seo"
    },
    {title:"On-page SEO",
    description:"Get new ideas to improve your site's health and SEO performance",
    tool:"3 tools",
    id:"seo"
    },
    {title:"Competitor Analysis",
    description:"Increase your website traffic and improve performance with competitors' winning strategies",
    tool:"4 tools",
    id:"MR"
    },
    {title:"Content Marketing",
    description:"Develop a powerful content strategy with data-driven solutions",
    tool:"6 tools",
    id:"content"
    },
    {title:"Local SEO",
    description:"Optimize your site for local searches to get more customers in your area",
    tool:"4 tools",
    id:"seo"
    },
    {title:"Rank Tracking",
    description:"Track daily changes of your target keywords in your target location",
    tool:"3 tools",
    id:"seo"
    },
    {title:"Social Media Management",
    description:"Increase your brand awareness with our social media posting and analytics platform",
    tool:"2 tools",
    id:"s&s"
    },
    {title:"Link Building",
    description:"Find unique opportunities to strengthen your backlink profile",
    tool:"5 tools",
    id:"seo"
    },
    {title:"Competitor SEO Analysis",
    description:"Find all of the keywords and content in your competitor's strategy",
    tool:"7 tools",
    id:"seo"
    },
    {title:"Content Creation and Distribution",
    description:"Create and share traffic-driving articles that make your target audience take action",
    tool:"3 tools",
    id:"content"
    },
    {title:"Content Optimization",
    description:"Drive more organic traffic with personalized recommendations to optimize your content",
    tool:"2 tools",
    id:"content"
    },
    {title:"Content Marketing Analytics",
    description:"Assess your content performance to identify areas of improvement",
    tool:"2 tools",
    id:"content"
    },
    {title:"Market Analysis",
    description:"Analyze your position and get ahead of the competition in a current or new market",
    tool:"2 tools",
    id:"MR"
    },
    {title:"Paid Advertising",
    description:"See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
    tool:"3 tools",
    id:"MR"
    },
    {title:"Competitor PR Monitoring",
    description:"Track your rivals' online mentions and social media presence to build your brand's reputation",
    tool:"2 tools",
    id:"MR"
    },
    {title:"PPC Keyword Research",
    description:"Build your perfect paid search campaign with our keyword research tools",
    tool:"4 tools",
    id:"adv"
    },
    {title:"Website Monetization",
    description:"Monetize your audience with our powerful tools for bloggers, ad publishers, and affiliate managers",
    tool:"2 tools",
    id:"adv"
    },
]


let filter_container=document.querySelector("#interest_container");
display(filter_data);
function display(data){
    filter_container.innerHTML=null;

    data.forEach((ele)=>{
        let div=document.createElement("div");
        div.setAttribute("id","interest_div")
        let div1=document.createElement("div");
        let div2=document.createElement("div");

        let title=document.createElement("p");
        title.innerText=ele.title;

        let  desc=document.createElement("p");
        desc.innerText=ele.description;

        let more=document.createElement("p");
        more.innerText="Learn more";

        let tools=document.createElement("button");
        tools.innerText=ele.tool;

        div1.append(title,desc);
        div2.append(more,tools);
        div.append(div1,div2);
        filter_container.append(div);
    })
};

document.querySelector("#all").addEventListener("click",()=>{
    display(filter_data);
})
document.querySelector("#seo").addEventListener("click",()=>{
    interest_filter("seo")
})
document.querySelector("#content").addEventListener("click",()=>{
    interest_filter("content")
})
document.querySelector("#market_research").addEventListener("click",()=>{
    interest_filter("MR")
})
document.querySelector("#advertising").addEventListener("click",()=>{
    interest_filter("adv")
})
document.querySelector("#ss").addEventListener("click",()=>{
    interest_filter("s&s")
})

function interest_filter(id){
   let x= filter_data.filter((ele)=>{
        return ele.id==id;
    })
    display(x);
}