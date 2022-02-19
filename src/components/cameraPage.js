import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";
import { Camera } from "expo-camera";
import PageTitle from "./PageTitle";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // // camer ref to access camera
  // const cameraRef = useRef(null);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  // // Take the photo
  // const takePhoto = async () => {
  //   if (cameraRef) {
  //     console.log("Taking picture");
  //     try {
  //       let photo = await cameraRef.current.takePictureAsync({
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //       });
  //       return photo;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   savePhoto(photo);
  // };

  // // Save the photo to the camera roll
  // const savePhoto = async (photo) => {
  //   const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //   if (status !== "granted") {
  //     console.log("perms needed");
  //   } else {
  //     const asset = await MediaLibrary.createAssetAsync(photo.uri);
  //     await MediaLibrary.createAlbumAsync("WAFFLES", asset);
  //     console.log("saved");
  //   }
  // };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <PageTitle title={"Camera"} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Button title="Pick an image from camera roll" onPress={pickImage} />

      {/* <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const r = await takePhoto();
              Alert.alert("DEDBUG", JSON.stringify(r));
            }}
          >
            <Image
              style={styles.buttonImage}
              source={require("../assets/images/cameraPage/shutter.png")}
            />
          </TouchableOpacity>
        </View>
      </Camera> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  // camera: {
  //   flex: 1,
  // },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
