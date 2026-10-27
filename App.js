
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';


import { useState,useEffect } from 'react';



const API_URL = 'http://192.168.0.103:3000/products';
 





const products = [
  { name: 'Wireless Headphones', price: 59 },
  { name: 'Keyboard', price: 45 },
    { name: 'Mouse', price: 25 },
    {name: 'Monitor', price: 120}
];
///this is functional component
const Stack = createNativeStackNavigator();
function ProductDetailsScreen({ route }) {
  const product = route.params.product;

  const images = {
    'Wireless Headphones': require('./assets/products/headphones.png'),
    'Keyboard': require('./assets/products/keyboard.png'),
    'Mouse': require('./assets/products/mouse.png'),
    'Monitor': require('./assets/products/monitor.png'),
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F1F5F9',
      padding: 20,
    }}>
      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
      }}>

        <Image
          source={images[product.name]}
          style={{
            width: 220,
            height: 220,
            marginBottom: 16,
          }}
          resizeMode="contain"
        />

        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#0F172A',
          textAlign: 'center',
          marginBottom: 12,
        }}>
          {product.name}
        </Text>

        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#2563EB',
        }}>
          ${product.price.toFixed(2)}
        </Text>

      </View>
    </View>
  );
}



function ShopScreen({ navigation }) {
    const [search, setSearch] = React.useState('');
    const [cart, setCart] = React.useState([]);
const [apiProducts, setApiProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      setApiProducts(data);
      console.log('Products loaded:', data);
    console.log('First product:', JSON.stringify(data[0]));
    })
.catch(error => {
  console.log('API error:', error.message);
  alert('API error: ' + error.message);
})
.finally(() => setLoading(false));
}, []);


const cartTotal = cart.reduce(
  (total, item) => total + item.price,
  0
);


   
function addToCart(product) {

  setCart(previousCart => [...previousCart, product]);
}




function removeFromCart(indexToRemove) {
  setCart(previousCart => 
    previousCart.filter((item,index)=>
 index!== indexToRemove))
}



    


const filteredProducts = apiProducts.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);




return (  
<View style={styles.container}>

      <Text style={styles.title}>
    Explore Products
        {loading  && <Text>Loading products..</Text>}
      </Text>
      
<TextInput placeholder="Search products..." 
value={search} 
onChangeText={setSearch}
style={styles.searchInput}
 />

<View style={{
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 16,
  marginTop: 12,
  marginBottom: 12,
  width: '92%',
  alignSelf: 'center',

}}>
<View style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
}}>
  <Text style={{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
  }}>
    Shopping Cart
  </Text>

  {cart.length > 0 && (
    <Text style={{
      fontSize: 14,
      color: '#717870',
    }}>
      {cart.length} {cart.length === 1 ? 'item' : 'items'}
    </Text>
  )}
</View>
{cart.map((item, index) => (
  <View
    key={index}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E2E8F0',
    }}
  >
    <View style={{ flex: 1, marginRight: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        {item.name}
      </Text>
      <Text>${item.price.toFixed(2)}</Text>
    </View>

    <Pressable
      onPress={() => removeFromCart(index)}
      style={{
        width: 90,
        height: 40,
        backgroundColor: '#FEE2E2',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#DC2626', fontWeight: 'bold' }}>
        Remove
      </Text>
    </Pressable>
  </View>
))}
{cart.length === 0 && (
  <Text style={{
  color: '#64748B',
  fontSize: 16,
  textAlign: 'center',
  paddingVertical: 20,}}
  >Your cart is empty</Text>
)}




<Text
 style={{
   fontSize: 20, 
   fontWeight: 'bold',
 color: '#225ad3',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 12,
   
   }}>
  Total: ${cartTotal.toFixed(2)}
</Text>

{cart.length > 0 && (
  <Pressable
   style={[styles.button, { backgroundColor: '#DC2626' }]}
  onPress={() =>
  Alert.alert(
    'Clear Cart',
    'Are you sure you want to remove all items?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', onPress: () => setCart([]) }
    ]
  )
}
  >
    <Text style={styles.buttonText}>
      Clear Cart
    </Text>
  </Pressable>
)}
</View>
<View 
 key={products.name}
  style={styles.productCard}>

  {!loading && filteredProducts.length === 0 && 
  (<Text>No products found</Text>)}


<ScrollView
  style={{ flex: 1, width: '100%' }}
  contentContainerStyle ={{paddingBottom: 270}}
  keyboardShouldPersistTaps="handled"
>
{filteredProducts.map((product) => (


  <View
  
  key={product.name}
style={styles.productCard}

>



  {product.name === 'Wireless Headphones' && (
  <Image
    source={require('./assets/products/headphones.png')}
    style={{
      width: 120,
      height: 120,
      borderRadius: 12,
      alignSelf:"center",
      marginBottom: 12,
    }}
    resizeMode="contain"
  />
)}

{product.name === 'Keyboard' && (
  <Image
    source={require('./assets/products/keyboard.png')}
    style={{
      width: 120,
      height: 120,
      borderRadius: 12,
      alignSelf: 'center',
      marginBottom: 12,
    }}
    resizeMode="contain"
  />
)}


{product.name === 'Mouse' && (
  <Image
    source={require('./assets/products/mouse.png')}
    style={{
      width: 120,
      height: 120,
      borderRadius: 12,
      alignSelf: 'center',
      marginBottom: 12,
    }}
    resizeMode="contain"
  />
)}

{product.name === 'Monitor' && (
  <Image
    source={require('./assets/products/monitor.png')}
    style={{
      width: 120,
      height: 120,
      borderRadius: 12,
      alignSelf: 'center',
      marginBottom: 12,
    }}
    resizeMode="contain"
  />
)}

    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetails', { product })
      }
    >
     <Text style={{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#0F172A',
  textAlign: 'center',
}}>
  {product.name}
</Text>

<Text style={{
  fontSize: 15,
  fontWeight: 'bold',
  color: '#2563EB',
  textAlign: 'center',
  marginTop: 8,
}}>
  ${product.price.toFixed(2)}
</Text>
     
    </Pressable>

    <Pressable
      style={styles.button}
      onPress={() => addToCart(product)}
    >
      <Text style={styles.buttonText}>
        Add to Cart
      </Text>
    </Pressable>
  </View>
))}

</ScrollView>

</View>
</View>
);
}

export default function App() {
  return (

        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'95%'

  },
  title:{
fontSize:26,
color:"#0F172A",
fontWeight: 'bold',
textAlign:'center',
marginBottom: 10,


  },
  button: {
    backgroundColor: '#1D4ED8',
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
    alignItems:'center',
    width: '100%'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 18,
    backgroundColor: '#FFFFFF',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#325dd4',
  },
  productCard: {
  backgroundColor: '#FFFFFF',
  padding: 16,
  borderRadius: 12,
  marginTop: 12,
  alignItems: 'center',

  },

searchInput: {
  backgroundColor: '#FFFFFF',
  padding: 12,
  borderRadius: 12,
  width: '85%',
  borderWidth: 1,
  borderColor: '#CBD5E1',
},

  
});
