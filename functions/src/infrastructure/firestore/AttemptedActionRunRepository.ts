import { firestore } from "../../config/firebase.config";
import AttemptedActionRun from "../../domain/AttemptedActionRun.type";
import IFirestoreRepository from "../../domain/IRepository";

class AttemptedActionRunRepository implements IFirestoreRepository {
  collection: string

  constructor() {
    this.collection = 'attempted-runs';
  }

  public async create(run: AttemptedActionRun): Promise<void> {
    await firestore.collection(this.collection).add(run);
  }
}

const instance = new AttemptedActionRunRepository();

export default instance;

