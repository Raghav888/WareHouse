export default function Orders(){

    const [products, setProducts] = useState([]);
    const {setShowLoader} = useLoader();

    const fetchProducts = () => {
        setShowLoader(true);
        
        const productsResponse = [];
        for (let i = 0; i < 20; i++) {
          const imageUrl = "https://picsum.photos/150/100";
          productsResponse.push({
            id: i,
            name: `Product-${i + 1}`,
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo possimus asperiores laboriosam fugiat",
            quantity: Math.floor(Math.random() * 10),
            imageUrl,
          });
        }
    
        setTimeout(()=> {
          setShowLoader(false);
        }, 5000);
    
        setProducts(productsResponse);
      };
      
    return (
        <div>
           
        </div>
    );
}
