import React from 'react'
import {
  View,
  Image,
  Text,
  ScrollView
} from 'react-native'
import { classes } from './AppClasses'

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={classes.bannerCont}>
          <Image
            style={classes.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={classes.contenedor}>
          <Text style={classes.titulo}>Qué hacer en París</Text>

          <ScrollView
            horizontal={true}
          >
            <View>
              <Image
                style={classes.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>

            <View>
              <Image
                style={classes.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>

            <View>
              <Image
                style={classes.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>

            <View>
              <Image
                style={classes.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>

            <View>
              <Image
                style={classes.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={classes.titulo}>Los Mejores Alojamientos</Text>

          <View>
            <Image
              style={classes.mejores}
              source={require('./assets/img/mejores1.jpg')}
            />
          </View>

          <View>
            <Image
              style={classes.mejores}
              source={require('./assets/img/mejores2.jpg')}
            />
          </View>

          <View>
            <Image
              style={classes.mejores}
              source={require('./assets/img/mejores3.jpg')}
            />
          </View>

          <Text style={classes.titulo}>Hospedajes en LA</Text>

          <View style={classes.listado}>
            <View style={classes.listadoItem}>
              <Image
                style={classes.mejores}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>

            <View style={classes.listadoItem}>
              <Image
                style={classes.mejores}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>

            <View style={classes.listadoItem}>
              <Image
                style={classes.mejores}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>

            <View style={classes.listadoItem}>
              <Image
                style={classes.mejores}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  )
}

export default App
