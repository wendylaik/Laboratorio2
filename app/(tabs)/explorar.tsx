import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export default function explorar() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mi itinerario</Text>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Lista de actividades</Text>

 
        <View style={styles.dateHeaderCard}>
          <View style={styles.dateLeftSection}>
            <Text style={styles.calendarIcon}>📅</Text>
            <View>
              <Text style={styles.dateText}>Lunes, 15 de mayo 2025</Text>
              <Text style={styles.activitiesCount}>3 actividades</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Añadir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/Machu.jpg')} 
              style={styles.activityImage}
              contentFit="cover"
            />
            <View style={[styles.badge, { backgroundColor: '#e879f9' }]}>
              <Text style={styles.badgeText}>Cultura</Text>
            </View>
          </View>

          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Machu Picchu</Text>
            <Text style={styles.activityInfo}>📍 Cusco, Perú</Text>
            <Text style={styles.activityInfo}>🕒 09:00 - 13:00</Text>
            <Text style={styles.activityObservation}>"Llevar protector solar y agua"</Text>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/almuerzo.jpg')} 
              style={styles.activityImage}
              contentFit="cover"
            />
            <View style={[styles.badge, { backgroundColor: '#f59e0b' }]}>
              <Text style={styles.badgeText}>Gastronomía</Text>
            </View>
          </View>

          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Almuerzo</Text>
            <Text style={styles.activityInfo}>📍 Aguas Calientes, Perú</Text>
            <Text style={styles.activityInfo}>🕒 13:30 - 15:00</Text>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/tren.jpg')} 
              style={styles.activityImage}
              contentFit="cover"
            />
            <View style={[styles.badge, { backgroundColor: '#9ca3af' }]}>
              <Text style={styles.badgeText}>Transporte</Text>
            </View>
          </View>

          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Tren de regreso</Text>
            <Text style={styles.activityInfo}>📍 Cusco, Perú</Text>
            <Text style={styles.activityInfo}>🕒 16:00 - 18:00</Text>
            <Text style={styles.activityObservation}>"Confirmar 2 horas antes"</Text>
          </View>
        </View>


        <View style={[styles.dateHeaderCard, { marginBottom: 100 }]}> 
          <View style={styles.dateLeftSection}>
            <Text style={styles.calendarIcon}>📅</Text>
            <View>
              <Text style={styles.dateText}>Martes, 16 de mayo 2025</Text>
              <Text style={styles.activitiesCount}>2 actividades</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Añadir</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 20,
  },
  backArrow: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, 
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  
  dateHeaderCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    elevation: 1, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dateLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  dateText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  activitiesCount: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  addButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: 14,
  },

  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  activityImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 4,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  activityDetails: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  activityInfo: {
    fontSize: 13,
    color: '#555',
    marginBottom: 3,
  },
  activityObservation: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 2,
  },

  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#7e7e7e',
    fontWeight: '600',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});