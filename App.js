import React from 'react';
import { StyleSheet, Text, BackAndroid,ScrollView,DrawerLayoutAndroid,ToolbarAndroid ,Keyboard ,Alert,TouchableOpacity,View ,WebView,Image,TextInput,ToastAndroid,ListView,ActivityIndicator, Button} from 'react-native';
import Video from 'react-native-video';
import Permissions from 'react-native-permissions'
import ToggleSwitch from 'toggle-switch-react-native'
var RNFetchBlob = require('react-native-fetch-blob').default;
const PictureDir = RNFetchBlob.fs.dirs.PictureDir;
const { config, fs } = RNFetchBlob




export default class App extends React.Component {


  




  constructor(props) {
    super(props);
    this.state = {
      title:"InstaDown",
      image:'https://scontent.cdninstagram.com/vp/f0dd62cca15e52f20248ed5003b3934d/5AE0FC14/t51.2885-15/sh0.08/e35/p640x640/26370975_145300586176679_9201298365969596416_n.jpg',
      video:'https://scontent.cdninstagram.com/vp/dd675533936bd9ea9a611c46c86080ab/5A646EB5/t50.2886-16/26256151_774606009393714_4241077626546720039_n.mp4',
      data: '',
      text:'',
       text2: "http://instadownloder.epizy.com/phptest.php?url=https://www.instagram.com/p/BdJ9iD9hZOL/&type=image&i=1" ,
       link2:"https://mohamedebrahim.000webhostapp.com/insta/phptest.php?url=https://www.instagram.com/p/BdJ9iD9hZOL/&type=image",
       video2:"https://mohamedebrahim.000webhostapp.com/insta/phptest.php?url=https://www.instagram.com/p/BdZU-BbFDba/&type=video",
       sfx:"",
       isLoading: true,
       type:"image",

           rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,

        dir:fs.dirs.PictureDir,
       
      };
     
  }





  render() {
   
    var navigationView = (
      <ScrollView >

      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
                  style={{width: 150, height: 150,margin:10,alignSelf:'center'}}
                  source={require('./logo.png')}
                  />
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>With just one click, Instagram Video Downloader will help you download or repost your favorite videos and pictures on Instagram and Vine. And it is 100% FREE</Text>
        <Text style={{margin: 10,marginTop:200, fontSize: 18, textAlign: 'center',fontWeight:'bold'}}>About</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Developer: Mohamed Ebrahim</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Email: ebrahimm131@gmail.com</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Phone: +20 127 86 95 406</Text>
      </View>
      </ScrollView>
    );

    {return (


      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
     

    
      <View style={styles.container}>
        
        <ToolbarAndroid
            style={styles.toolbar}
            title={this.state.title}
            navIcon={require("./ic_launcher.png")}
            onActionSelected={this.onActionSelected}
            titleColor= "#fff"
            actions = {[
              {title: "Close App", show: "never",},{title: "Log out:", show: "never",}
            ]}
            onActionSelected={this.onActionSelected}
            />
{/*<View style={styles.container}>
<TouchableOpacity
          style={styles.video}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <Video
            /* For ExoPlayer */
           /*source={{ uri: 'https://scontent.cdninstagram.com/vp/40f9397a04b302ca9d2fac82bbdbd0f6/5A4FE094/t50.2886-16/26028758_1755974754710050_1567827604739823690_n.mp4', type: 'mpd' }}*/
            /*source={require('./video.mp4')}
            style={styles.video}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            hidden={false}
            
            repeat={false}
          />
 
        </TouchableOpacity>
          </View>*/}
        <View style={styles.container}>
         
       
                <Text style={styles.textstyle}>Instgram Link</Text>
                <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter Copied Link"
        
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                
                // Calling the custom TextInputStyleClass.
                style={styles.TextInputStyleClass}
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={ () => this.myFunction() }
              
              />


                    <ToggleSwitch
                        style={styles.button}
                        isOn={true}
                        onColor='#00bbff'
                        offColor='#841584'
                        label={this.state.type}
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='large'
                        onToggle={(isOn) => this.check(isOn) }
                    />
              
                
              <Button
              style={styles.button}
                    onPress={ () => {this.fetchFuckndata()}}
                    title="Download"
                    color="#841584"
                  />

                  <Image
                  style={{width: 350, height: 350}}
                  source={{uri: this.state.data.body}}
                  />
           { /*<Video  
                        source={{ uri: "https://scontent.cdninstagram.com/vp/40f9397a04b302ca9d2fac82bbdbd0f6/5A4FE094/t50.2886-16/26028758_1755974754710050_1567827604739823690_n.mp4", type: 'mp4' }}
            />*/}

                  {/*<Video
                            source={require('./video.mp4')}
                            rate={1.0}
                            volume={1.0}
                            muted={false}
                            resizeMode={"contain"}
                            repeat
                            style={styles.video}
                  />*/}

                        </View>
                    </View>
       </DrawerLayoutAndroid>
    );

             
  }
}


onActionSelected(position) {
  if (position === 0) {
      BackAndroid.exitApp();
  }
}




  myFunction(){
    this.state.sfx = "https://mohamedebrahim.000webhostapp.com/insta/phptest.php?url="+this.state.text+"&type="+this.state.type;
    ToastAndroid.show(this.state.sfx,ToastAndroid.SHORT);
//==========================================================================  
    fetch(this.state.sfx, {
      method: 'GET'
    })
    .then((response) =>    response.json())
    .then((responseJson) =>  {
      console.log(responseJson);
      this.setState({
          data: responseJson
      })
      this.downloadData();
      Keyboard.dismiss();
    })
    .catch((error) =>  {
      console.error(error);
    });

    //=======================================================================================
             //=============================================================

  };


      fetchFuckndata(){
        if(this.state.text == 0){
          ToastAndroid.show("Empty Link",ToastAndroid.SHORT);
        }
        else{
          this.myFunction();
        }
      };


      check(bool){
        if(bool == false){
          this.setState({
            type: "video"
        })
        }else{
          this.setState({
            type: "image"
        })
        }
      }


      downloadData() {
        let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
      fileCache: true,
      addAndroidDownloads : {
    useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
    notification : false,
    path:  PictureDir + "/me_", // this is the path where your downloaded file will live in
    description : 'Downloading image.'
  }
}
config(options).fetch('GET', this.state.data.body).then((res) => {
  // do some magic here

  ToastAndroid.show("downlaoded successfully ",ToastAndroid.SHORT);
  //Alert.alert("Done!");
  })
    }
   

    

     
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    height:1500,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
   
  } ,
  

    TextInputStyleClass:{
     
    // Setting up Hint Align center.
    textAlign: 'center',
     
    // Setting up TextInput height as 50 pixel.
    height: 50,
    width:300,
  
    // Set border width.
     borderWidth: 2,
     
     // Set border Hex Color Code Here.
     borderColor: '#00bbff',
     
    // Set border Radius.
     borderRadius: 20 ,
     
    //Set background color of Text Input.
     backgroundColor : "#fff",
     margin:10,
     
    },
    textstyle:{
      fontWeight: "bold",
      fontSize:30,
      fontFamily: 'notoserif',
      color:'#000',


    },
    button:{
      margin:10,
    },
    video: {
    
      height: 300,
      width:300,
      
    },
    fullScreen: {
      position: 'absolute',
      backgroundColor: '#0ff',
      top: 0,
      height: 0,
      width:0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    toolbar: {
      backgroundColor: '#2196F3',
      height: 56,
      alignSelf: 'stretch',
    }, 
   
});
