import React, {useState, useRef, useCallback, useMemo, useEffect} from 'react';
import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '../../../env.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardList from '../../components/common/CardList';

const {width, height} = Dimensions.get('screen');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 6.5166,
  longitude: 3.38479,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

type InputAutoCompleteProps = {
  label: string;
  placeholder: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutoComplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutoCompleteProps) {
  return (
    <View style={{paddingBottom: 16}}>
      <Text style={styles.label}>{label}</Text>
      <GooglePlacesAutocomplete
        provider={PROVIDER_GOOGLE}
        styles={{textInput: styles.input}}
        placeholder={placeholder || ''}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'pt-BR',
        }}
      />
    </View>
  );
}

const MapScreen = () => {
  const [origin, setOrigin] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef<MapView>(null);

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, {duration: 1000});
    }
  };

  const edgePaddingValue = 100;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], {edgePadding});
    }
  };

  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: 'origin' | 'destination',
  ) => {
    const set = flag === 'origin' ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['45%', '60%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const cardsData2 = [
    {
      imageSource: require('../../asset/svg/blockOfFlats2.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'S.W Ikoyi, Lagos',
      rooms: 2,
      area: 88,
      price: 3000000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
  ];

  const cardsData = [
    {
      imageSource: require('../../asset/svg/blockOfFlats.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Surulere, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 240000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}>
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor="#1a1729"
            onReady={traceRouteOnReady}
          />
        )}
      </MapView>

      {/* <View style={styles.searchContainer}>
        <InputAutoComplete
          label="From"
          onPlaceSelected={(details: GooglePlaceDetail | null) => {
            onPlaceSelected(details, 'origin');
          }}
          placeholder="Enter starting point"
        />
        <InputAutoComplete
          label="To"
          onPlaceSelected={(details: GooglePlaceDetail | null) => {
            onPlaceSelected(details, 'destination');
          }}
          placeholder="Enter destination"
        />
        <TouchableOpacity style={styles.button} onPress={traceRoute}>
          <Text style={styles.buttonText}>Check Apartment Direction</Text>
        </TouchableOpacity>
        {distance && duration ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Distance: {distance.toFixed(2)} km
            </Text>
            <Text style={styles.infoText}>
              Duration: {Math.ceil(duration)} mins
            </Text>
          </View>
        ) : null}
      </View> */}

      {/* <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetView style={styles.contentContainer}>
            <CardList cardsData={cardsData2} />
            <CardList cardsData={cardsData} />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider> */}
    </GestureHandlerRootView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    width: '90%',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignSelf: 'center',
    elevation: 5,
  },
  label: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    height: 40,
  },
  button: {
    backgroundColor: '#141c25',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    fontWeight: '500',
    fontSize: 15,
    color: '#333333',
    marginTop: 5,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
